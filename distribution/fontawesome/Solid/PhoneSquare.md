# PhoneSquare


```text
fontawesome/Solid/PhoneSquare
```

```text
include('fontawesome/Solid/PhoneSquare')
```



| Illustration | PhoneSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PhoneSquare.png) | ![illustration for PhoneSquare](../../fontawesome/Solid/PhoneSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PhoneSquareXs>`
- `<$PhoneSquareSm>`
- `<$PhoneSquareMd>`
- `<$PhoneSquareLg>`





## PhoneSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoneSquare
include('fontawesome/Solid/PhoneSquare')

' renders the element
PhoneSquare('PhoneSquare', 'Phone Square', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PhoneSquare
include('fontawesome/Solid/PhoneSquare')

' renders the element
PhoneSquare('PhoneSquare', 'Phone Square', 'an optional tech label', 'an optional description')
@enduml
```

