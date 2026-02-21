# Mcdonalds


```text
simpleicons/M/Mcdonalds
```

```text
include('simpleicons/M/Mcdonalds')
```



| Illustration | Mcdonalds |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/M/Mcdonalds.png) | ![illustration for Mcdonalds](../../simpleicons/M/Mcdonalds.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$McdonaldsXs>`
- `<$McdonaldsSm>`
- `<$McdonaldsMd>`
- `<$McdonaldsLg>`





## Mcdonalds

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Mcdonalds
include('simpleicons/M/Mcdonalds')

' renders the element
Mcdonalds('Mcdonalds', 'Mcdonalds', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mcdonalds
include('simpleicons/M/Mcdonalds')

' renders the element
Mcdonalds('Mcdonalds', 'Mcdonalds', 'an optional tech label', 'an optional description')
@enduml
```

