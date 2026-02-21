# Smashingmagazine


```text
simpleicons/S/Smashingmagazine
```

```text
include('simpleicons/S/Smashingmagazine')
```



| Illustration | Smashingmagazine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Smashingmagazine.png) | ![illustration for Smashingmagazine](../../simpleicons/S/Smashingmagazine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SmashingmagazineXs>`
- `<$SmashingmagazineSm>`
- `<$SmashingmagazineMd>`
- `<$SmashingmagazineLg>`





## Smashingmagazine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Smashingmagazine
include('simpleicons/S/Smashingmagazine')

' renders the element
Smashingmagazine('Smashingmagazine', 'Smashingmagazine', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Smashingmagazine
include('simpleicons/S/Smashingmagazine')

' renders the element
Smashingmagazine('Smashingmagazine', 'Smashingmagazine', 'an optional tech label', 'an optional description')
@enduml
```

