# Laragon


```text
simpleicons/L/Laragon
```

```text
include('simpleicons/L/Laragon')
```



| Illustration | Laragon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Laragon.png) | ![illustration for Laragon](../../simpleicons/L/Laragon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LaragonXs>`
- `<$LaragonSm>`
- `<$LaragonMd>`
- `<$LaragonLg>`





## Laragon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Laragon
include('simpleicons/L/Laragon')

' renders the element
Laragon('Laragon', 'Laragon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Laragon
include('simpleicons/L/Laragon')

' renders the element
Laragon('Laragon', 'Laragon', 'an optional tech label', 'an optional description')
@enduml
```

