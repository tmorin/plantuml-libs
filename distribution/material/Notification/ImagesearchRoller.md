# ImagesearchRoller


```text
material/Notification/ImagesearchRoller
```

```text
include('material/Notification/ImagesearchRoller')
```



| Illustration | ImagesearchRoller |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/ImagesearchRoller.png) | ![illustration for ImagesearchRoller](../../material/Notification/ImagesearchRoller.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImagesearchRollerXs>`
- `<$ImagesearchRollerSm>`
- `<$ImagesearchRollerMd>`
- `<$ImagesearchRollerLg>`





## ImagesearchRoller

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ImagesearchRoller
include('material/Notification/ImagesearchRoller')

' renders the element
ImagesearchRoller('ImagesearchRoller', 'Imagesearch Roller', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ImagesearchRoller
include('material/Notification/ImagesearchRoller')

' renders the element
ImagesearchRoller('ImagesearchRoller', 'Imagesearch Roller', 'an optional tech label', 'an optional description')
@enduml
```

