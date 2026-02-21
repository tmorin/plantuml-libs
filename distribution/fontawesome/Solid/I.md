# I


```text
fontawesome/Solid/I
```

```text
include('fontawesome/Solid/I')
```



| Illustration | I |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/I.png) | ![illustration for I](../../fontawesome/Solid/I.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$IXs>`
- `<$ISm>`
- `<$IMd>`
- `<$ILg>`





## I

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element I
include('fontawesome/Solid/I')

' renders the element
I('I', 'I', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element I
include('fontawesome/Solid/I')

' renders the element
I('I', 'I', 'an optional tech label', 'an optional description')
@enduml
```

