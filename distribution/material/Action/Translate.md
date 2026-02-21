# Translate


```text
material/Action/Translate
```

```text
include('material/Action/Translate')
```



| Illustration | Translate |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Translate.png) | ![illustration for Translate](../../material/Action/Translate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TranslateXs>`
- `<$TranslateSm>`
- `<$TranslateMd>`
- `<$TranslateLg>`





## Translate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Translate
include('material/Action/Translate')

' renders the element
Translate('Translate', 'Translate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Translate
include('material/Action/Translate')

' renders the element
Translate('Translate', 'Translate', 'an optional tech label', 'an optional description')
@enduml
```

