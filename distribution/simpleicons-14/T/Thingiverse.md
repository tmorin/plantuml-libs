# Thingiverse


```text
simpleicons-14/T/Thingiverse
```

```text
include('simpleicons-14/T/Thingiverse')
```



| Illustration | Thingiverse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Thingiverse.png) | ![illustration for Thingiverse](../../simpleicons-14/T/Thingiverse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThingiverseXs>`
- `<$ThingiverseSm>`
- `<$ThingiverseMd>`
- `<$ThingiverseLg>`





## Thingiverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thingiverse
include('simpleicons-14/T/Thingiverse')

' renders the element
Thingiverse('Thingiverse', 'Thingiverse', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Thingiverse
include('simpleicons-14/T/Thingiverse')

' renders the element
Thingiverse('Thingiverse', 'Thingiverse', 'an optional tech label', 'an optional description')
@enduml
```

