# ImagesearchRoller


```text
material-4/Notification/ImagesearchRoller
```

```text
include('material-4/Notification/ImagesearchRoller')
```



| Illustration | ImagesearchRoller |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/ImagesearchRoller.png) | ![illustration for ImagesearchRoller](../../material-4/Notification/ImagesearchRoller.Local.png) |




## ImagesearchRoller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ImagesearchRoller
include('material-4/Notification/ImagesearchRoller')

' renders the element
ImagesearchRoller('ImagesearchRoller', 'Imagesearch Roller', 'an optional tech label')
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

' loads the Item which embeds the element ImagesearchRoller
include('material-4/Notification/ImagesearchRoller')

' renders the element
ImagesearchRoller('ImagesearchRoller', 'Imagesearch Roller', 'an optional tech label')
@enduml
```

