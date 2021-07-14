# People


```text
material-4/Social/People
```

```text
include('material-4/Social/People')
```



| Illustration | People |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/People.png) | ![illustration for People](../../material-4/Social/People.Local.png) |




## People

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element People
include('material-4/Social/People')

' renders the element
People('People', 'People', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element People
include('material-4/Social/People')

' renders the element
People('People', 'People', 'an optional tech label')
@enduml
```

