# Fediverse


```text
fontawesome/Brands/Fediverse
```

```text
include('fontawesome/Brands/Fediverse')
```



| Illustration | Fediverse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Fediverse.png) | ![illustration for Fediverse](../../fontawesome/Brands/Fediverse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FediverseXs>`
- `<$FediverseSm>`
- `<$FediverseMd>`
- `<$FediverseLg>`





## Fediverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Fediverse
include('fontawesome/Brands/Fediverse')

' renders the element
Fediverse('Fediverse', 'Fediverse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fediverse
include('fontawesome/Brands/Fediverse')

' renders the element
Fediverse('Fediverse', 'Fediverse', 'an optional tech label', 'an optional description')
@enduml
```

