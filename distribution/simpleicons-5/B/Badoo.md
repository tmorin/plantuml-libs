# Badoo


```text
simpleicons-5/B/Badoo
```

```text
include('simpleicons-5/B/Badoo')
```



| Illustration | Badoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Badoo.png) | ![illustration for Badoo](../../simpleicons-5/B/Badoo.Local.png) |




## Badoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Badoo
include('simpleicons-5/B/Badoo')

' renders the element
Badoo('Badoo', 'Badoo', 'an optional tech label')
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

' loads the Item which embeds the element Badoo
include('simpleicons-5/B/Badoo')

' renders the element
Badoo('Badoo', 'Badoo', 'an optional tech label')
@enduml
```

