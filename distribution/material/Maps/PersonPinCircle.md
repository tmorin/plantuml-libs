# PersonPinCircle


```text
material/Maps/PersonPinCircle
```

```text
include('material/Maps/PersonPinCircle')
```



| Illustration | PersonPinCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/PersonPinCircle.png) | ![illustration for PersonPinCircle](../../material/Maps/PersonPinCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PersonPinCircleXs>`
- `<$PersonPinCircleSm>`
- `<$PersonPinCircleMd>`
- `<$PersonPinCircleLg>`





## PersonPinCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PersonPinCircle
include('material/Maps/PersonPinCircle')

' renders the element
PersonPinCircle('PersonPinCircle', 'Person Pin Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonPinCircle
include('material/Maps/PersonPinCircle')

' renders the element
PersonPinCircle('PersonPinCircle', 'Person Pin Circle', 'an optional tech label', 'an optional description')
@enduml
```

