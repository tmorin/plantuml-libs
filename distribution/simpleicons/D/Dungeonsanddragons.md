# Dungeonsanddragons


```text
simpleicons/D/Dungeonsanddragons
```

```text
include('simpleicons/D/Dungeonsanddragons')
```



| Illustration | Dungeonsanddragons |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dungeonsanddragons.png) | ![illustration for Dungeonsanddragons](../../simpleicons/D/Dungeonsanddragons.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DungeonsanddragonsXs>`
- `<$DungeonsanddragonsSm>`
- `<$DungeonsanddragonsMd>`
- `<$DungeonsanddragonsLg>`





## Dungeonsanddragons

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dungeonsanddragons
include('simpleicons/D/Dungeonsanddragons')

' renders the element
Dungeonsanddragons('Dungeonsanddragons', 'Dungeonsanddragons', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dungeonsanddragons
include('simpleicons/D/Dungeonsanddragons')

' renders the element
Dungeonsanddragons('Dungeonsanddragons', 'Dungeonsanddragons', 'an optional tech label', 'an optional description')
@enduml
```

