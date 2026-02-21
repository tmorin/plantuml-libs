# Vectorworks


```text
simpleicons/V/Vectorworks
```

```text
include('simpleicons/V/Vectorworks')
```



| Illustration | Vectorworks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/V/Vectorworks.png) | ![illustration for Vectorworks](../../simpleicons/V/Vectorworks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VectorworksXs>`
- `<$VectorworksSm>`
- `<$VectorworksMd>`
- `<$VectorworksLg>`





## Vectorworks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Vectorworks
include('simpleicons/V/Vectorworks')

' renders the element
Vectorworks('Vectorworks', 'Vectorworks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vectorworks
include('simpleicons/V/Vectorworks')

' renders the element
Vectorworks('Vectorworks', 'Vectorworks', 'an optional tech label', 'an optional description')
@enduml
```

