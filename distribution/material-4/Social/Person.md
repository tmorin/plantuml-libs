# Person


```text
material-4/Social/Person
```

```text
include('material-4/Social/Person')
```



| Illustration | Person |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Social/Person.png) | ![illustration for Person](../../material-4/Social/Person.Local.png) |




## Person

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Person
include('material-4/Social/Person')

' renders the element
Person('Person', 'Person', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Person
include('material-4/Social/Person')

' renders the element
Person('Person', 'Person', 'an optional tech label', 'an optional description')
@enduml
```

