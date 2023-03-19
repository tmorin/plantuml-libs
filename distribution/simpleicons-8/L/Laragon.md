# Laragon


```text
simpleicons-8/L/Laragon
```

```text
include('simpleicons-8/L/Laragon')
```



| Illustration | Laragon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Laragon.png) | ![illustration for Laragon](../../simpleicons-8/L/Laragon.Local.png) |



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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Laragon
include('simpleicons-8/L/Laragon')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Laragon
include('simpleicons-8/L/Laragon')

' renders the element
Laragon('Laragon', 'Laragon', 'an optional tech label', 'an optional description')
@enduml
```

