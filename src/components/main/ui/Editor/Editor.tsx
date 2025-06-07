import styles from './Editor.module.scss';
import {Link} from 'react-router-dom';

const Editor = () => {
    return (
        <div className={styles.editor}>
          <div className={'container'}>
              <div className={styles.editorTitle}>
                  <h2>Редактор нового поколения</h2>
                  <p>Презентации только по вашим правилам: она будет выглядеть, как нужно</p>
              </div>

              <div className={styles.editorContent}>
                  <div className={styles.mackBook}>
                      <img src="/public/images/mackbook.png" alt="mackbook"/>
                  </div>
                  <div className={styles.editorBlur}>
                      <div className={styles.editorBlock}>
                          <div className={styles.editorText}>
                              <h4>Множество шаблонов</h4>
                              <p>Используйте готовые решения, чтобы значительно ускорить свою работу</p>
                          </div>

                          <div className={styles.editorImages}>
                              <img className={styles.editorCard} src="/public/images/Card.png" alt="card"/>
                              <img className={styles.editorContainer} src="/public/images/Container.svg" alt="container"/>
                              <img className={styles.editorHaram} src="/public/images/Haram.svg" alt="templates"/>
                              <img className={styles.templates} src="/public/images/Harameters.svg" alt="templates"/>
                          </div>
                      </div>
                      <div className={styles.editorTemplatesText}>
                          <div className={styles.editorTextTemplate}>
                              <h4>Стили для текста</h4>
                              <p>Строгие, курсивные, жирные, тонкие — выбирайте подходящие шрифты для работы</p>
                          </div>


                          <div className={styles.templateImages}>
                              <img className={styles.themeText} src="/public/images/themeText.png" alt="theme"/>
                              <img className={styles.iconText} src="/public/images/iconText.svg" alt="iconText"/>
                              <img className={styles.fontsIcon} src="/public/images/fonts.svg" alt="fontsIcon"/>
                              <img className={styles.downloadFont} src="/public/images/downlodText.svg" alt="downloadFont"/>
                          </div>
                      </div>
                      <div className={styles.elements}>
                              <div className={styles.elementsText}>
                                  <h4>Загрузка элементов</h4>
                                  <p>Всё, что может понадобиться для стильной презентации, уже есть в библиотеке</p>
                              </div>


                              <div className={styles.elementsImages}>
                                  <img className={styles.elementsIcon} src="/public/images/elementsIcon.svg" alt="elements"/>
                                  <img className={styles.elementsStar} src="/public/images/starElement.svg" alt="star"/>
                                  <img className={styles.elementsLibrary} src="/public/images/library.svg" alt="library"/>
                                  <img className={styles.elementsSvg} src="/public/images/elements.svg" alt="elements"/>
                              </div>
                          </div>
                      <div className={styles.pencil}>
                              <div className={styles.pencilText}>
                                  <h4>Карандаш</h4>
                                  <p>В редакторе есть возможность создавать элементы вручную — берите перо и творите</p>
                              </div>
                              <div className={styles.pencilIamges}>
                                  <img className={styles.edit} src="/public/images/edit.svg" alt="edit"/>
                                  <img className={styles.instruments} src="/public/images/instrument.svg" alt="instrument"/>
                                  <img className={styles.scissors} src="/public/images/scissors.svg" alt="scissors"/>
                                  <img className={styles.eraser} src="/public/images/eraser.svg" alt="eraser"/>
                                  <img className={styles.pencilIcon} src="/public/images/pencilIcon.svg" alt="pencilIcon"/>
                                  <img className={styles.pencilLine} src="/public/images/line.svg" alt="line"/>
                              </div>
                          </div>

                      <div className={styles.startBlock}>
                         <Link className={styles.btnStart} to={'https://slidery.ai/sign-up'}>
                             Начать бесплатно
                         </Link>
                      </div>
                  </div>
              </div>
              <button className={styles.editorBtn}>
                  Начать бесплатно
              </button>
          </div>
        </div>
    );
};

export default Editor;
