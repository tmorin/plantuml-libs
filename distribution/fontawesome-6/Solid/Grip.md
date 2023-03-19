# Grip


```text
fontawesome-6/Solid/Grip
```

```text
include('fontawesome-6/Solid/Grip')
```



| Illustration | Grip |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Grip.png) | ![illustration for Grip](../../fontawesome-6/Solid/Grip.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GripXs>`
- `<$GripSm>`
- `<$GripMd>`
- `<$GripLg>`





## Grip

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Grip
include('fontawesome-6/Solid/Grip')

' renders the element
Grip('Grip', 'Grip', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grip
include('fontawesome-6/Solid/Grip')

' renders the element
Grip('Grip', 'Grip', 'an optional tech label', 'an optional description')
@enduml
```

