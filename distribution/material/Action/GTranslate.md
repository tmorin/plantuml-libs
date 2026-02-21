# GTranslate


```text
material/Action/GTranslate
```

```text
include('material/Action/GTranslate')
```



| Illustration | GTranslate |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/GTranslate.png) | ![illustration for GTranslate](../../material/Action/GTranslate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GTranslateXs>`
- `<$GTranslateSm>`
- `<$GTranslateMd>`
- `<$GTranslateLg>`





## GTranslate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GTranslate
include('material/Action/GTranslate')

' renders the element
GTranslate('GTranslate', 'G Translate', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element GTranslate
include('material/Action/GTranslate')

' renders the element
GTranslate('GTranslate', 'G Translate', 'an optional tech label', 'an optional description')
@enduml
```

