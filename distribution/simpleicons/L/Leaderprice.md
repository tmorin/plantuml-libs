# Leaderprice


```text
simpleicons/L/Leaderprice
```

```text
include('simpleicons/L/Leaderprice')
```



| Illustration | Leaderprice |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Leaderprice.png) | ![illustration for Leaderprice](../../simpleicons/L/Leaderprice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeaderpriceXs>`
- `<$LeaderpriceSm>`
- `<$LeaderpriceMd>`
- `<$LeaderpriceLg>`





## Leaderprice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Leaderprice
include('simpleicons/L/Leaderprice')

' renders the element
Leaderprice('Leaderprice', 'Leaderprice', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leaderprice
include('simpleicons/L/Leaderprice')

' renders the element
Leaderprice('Leaderprice', 'Leaderprice', 'an optional tech label', 'an optional description')
@enduml
```

