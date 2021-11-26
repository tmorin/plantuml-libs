# Googletranslate


```text
simpleicons-5/G/Googletranslate
```

```text
include('simpleicons-5/G/Googletranslate')
```



| Illustration | Googletranslate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Googletranslate.png) | ![illustration for Googletranslate](../../simpleicons-5/G/Googletranslate.Local.png) |




## Googletranslate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googletranslate
include('simpleicons-5/G/Googletranslate')

' renders the element
Googletranslate('Googletranslate', 'Googletranslate', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Googletranslate
include('simpleicons-5/G/Googletranslate')

' renders the element
Googletranslate('Googletranslate', 'Googletranslate', 'an optional tech label')
@enduml
```

