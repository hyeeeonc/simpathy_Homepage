import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import ehrtj from '../public/assets/json/ehrtj.json'
import palette from '../styles/palette'
import { Title } from '../src/components/Title'
import Modal from '../src/common/Modal'

const DatabaseBlock = styled.main`
  width: 100%;
`

const DatabaseContainer = styled.div``

const DatabaseTable = styled.table`
  margin-bottom: 100px;

  th,
  td {
    padding: 14px;
  }
`

const DatabaseTh = styled.th`
  border: 1px solid ${palette.gray[7]};
`

const DatabaseTr = styled.tr``

const DatabaseTd = styled.td`
  border-bottom: 1px solid ${palette.gray[7]};
`

export default function Database() {
  const [mount, setMount] = useState<boolean>(false)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const modalOpenHandler = () => {
    setModalOpen(_ => !modalOpen)
  }
  useEffect(() => {
    setMount(true)
    console.log(ehrtj)
  })
  return (
    mount && (
      <DatabaseBlock>
        <Title title="Database" />

        <DatabaseTable>
          <DatabaseTh>학년도/월</DatabaseTh>
          <DatabaseTh>영역</DatabaseTh>
          <DatabaseTh>문항번호</DatabaseTh>
          <DatabaseTh
            onClick={() => {
              modalOpenHandler()
            }}
          >
            작가/제목
          </DatabaseTh>
          {[...ehrtj].reverse().map((item, key) => (
            <DatabaseTr key={key}>
              <DatabaseTd
                style={{
                  fontSize: '13px',
                }}
              >
                {item.year}
              </DatabaseTd>
              <DatabaseTd
                style={{
                  fontSize: '13px',
                }}
              >
                {item.area}
              </DatabaseTd>
              <DatabaseTd
                style={{
                  fontSize: '13px',
                }}
              >
                {item.number}
              </DatabaseTd>
              <DatabaseTd>{item.title}</DatabaseTd>
            </DatabaseTr>
          ))}
        </DatabaseTable>
        <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
          <embed
            style={{
              width: '100%',
              height: '100%',
            }}
            src="./assets/2211.pdf"
            type="application/pdf"
          ></embed>
        </Modal>
      </DatabaseBlock>
    )
  )
}
