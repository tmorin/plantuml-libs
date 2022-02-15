# Apachehadoop


```text
simpleicons-6/A/Apachehadoop
```

```text
include('simpleicons-6/A/Apachehadoop')
```



| Illustration | Apachehadoop |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Apachehadoop.png) | ![illustration for Apachehadoop](../../simpleicons-6/A/Apachehadoop.Local.png) |




## Apachehadoop

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Apachehadoop
include('simpleicons-6/A/Apachehadoop')

' renders the element
Apachehadoop('Apachehadoop', 'Apachehadoop', 'an optional tech label')
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

' loads the Item which embeds the element Apachehadoop
include('simpleicons-6/A/Apachehadoop')

' renders the element
Apachehadoop('Apachehadoop', 'Apachehadoop', 'an optional tech label')
@enduml
```

