# Googletranslate


```text
simpleicons-8/G/Googletranslate
```

```text
include('simpleicons-8/G/Googletranslate')
```



| Illustration | Googletranslate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Googletranslate.png) | ![illustration for Googletranslate](../../simpleicons-8/G/Googletranslate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogletranslateXs>`
- `<$GoogletranslateSm>`
- `<$GoogletranslateMd>`
- `<$GoogletranslateLg>`





## Googletranslate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googletranslate
include('simpleicons-8/G/Googletranslate')

' renders the element
Googletranslate('Googletranslate', 'Googletranslate', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Googletranslate
include('simpleicons-8/G/Googletranslate')

' renders the element
Googletranslate('Googletranslate', 'Googletranslate', 'an optional tech label', 'an optional description')
@enduml
```

