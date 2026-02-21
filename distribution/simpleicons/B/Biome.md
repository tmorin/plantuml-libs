# Biome


```text
simpleicons/B/Biome
```

```text
include('simpleicons/B/Biome')
```



| Illustration | Biome |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Biome.png) | ![illustration for Biome](../../simpleicons/B/Biome.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BiomeXs>`
- `<$BiomeSm>`
- `<$BiomeMd>`
- `<$BiomeLg>`





## Biome

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Biome
include('simpleicons/B/Biome')

' renders the element
Biome('Biome', 'Biome', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Biome
include('simpleicons/B/Biome')

' renders the element
Biome('Biome', 'Biome', 'an optional tech label', 'an optional description')
@enduml
```

