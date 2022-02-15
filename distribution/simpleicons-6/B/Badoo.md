# Badoo


```text
simpleicons-6/B/Badoo
```

```text
include('simpleicons-6/B/Badoo')
```



| Illustration | Badoo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Badoo.png) | ![illustration for Badoo](../../simpleicons-6/B/Badoo.Local.png) |




## Badoo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Badoo
include('simpleicons-6/B/Badoo')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Badoo
include('simpleicons-6/B/Badoo')

' renders the element
Badoo('Badoo', 'Badoo', 'an optional tech label')
@enduml
```

