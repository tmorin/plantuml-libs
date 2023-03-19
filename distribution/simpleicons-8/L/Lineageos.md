# Lineageos


```text
simpleicons-8/L/Lineageos
```

```text
include('simpleicons-8/L/Lineageos')
```



| Illustration | Lineageos |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Lineageos.png) | ![illustration for Lineageos](../../simpleicons-8/L/Lineageos.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LineageosXs>`
- `<$LineageosSm>`
- `<$LineageosMd>`
- `<$LineageosLg>`





## Lineageos

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lineageos
include('simpleicons-8/L/Lineageos')

' renders the element
Lineageos('Lineageos', 'Lineageos', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Lineageos
include('simpleicons-8/L/Lineageos')

' renders the element
Lineageos('Lineageos', 'Lineageos', 'an optional tech label', 'an optional description')
@enduml
```

