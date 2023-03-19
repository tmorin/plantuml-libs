# Circle


```text
fontawesome-6/Solid/Circle
```

```text
include('fontawesome-6/Solid/Circle')
```



| Illustration | Circle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Circle.png) | ![illustration for Circle](../../fontawesome-6/Solid/Circle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleXs>`
- `<$CircleSm>`
- `<$CircleMd>`
- `<$CircleLg>`





## Circle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Circle
include('fontawesome-6/Solid/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Circle
include('fontawesome-6/Solid/Circle')

' renders the element
Circle('Circle', 'Circle', 'an optional tech label', 'an optional description')
@enduml
```

