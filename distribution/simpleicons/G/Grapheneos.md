# Grapheneos


```text
simpleicons/G/Grapheneos
```

```text
include('simpleicons/G/Grapheneos')
```



| Illustration | Grapheneos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Grapheneos.png) | ![illustration for Grapheneos](../../simpleicons/G/Grapheneos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GrapheneosXs>`
- `<$GrapheneosSm>`
- `<$GrapheneosMd>`
- `<$GrapheneosLg>`





## Grapheneos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Grapheneos
include('simpleicons/G/Grapheneos')

' renders the element
Grapheneos('Grapheneos', 'Grapheneos', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Grapheneos
include('simpleicons/G/Grapheneos')

' renders the element
Grapheneos('Grapheneos', 'Grapheneos', 'an optional tech label', 'an optional description')
@enduml
```

