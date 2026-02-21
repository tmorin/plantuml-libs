# Streamrunners


```text
simpleicons-14/S/Streamrunners
```

```text
include('simpleicons-14/S/Streamrunners')
```



| Illustration | Streamrunners |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Streamrunners.png) | ![illustration for Streamrunners](../../simpleicons-14/S/Streamrunners.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StreamrunnersXs>`
- `<$StreamrunnersSm>`
- `<$StreamrunnersMd>`
- `<$StreamrunnersLg>`





## Streamrunners

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Streamrunners
include('simpleicons-14/S/Streamrunners')

' renders the element
Streamrunners('Streamrunners', 'Streamrunners', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Streamrunners
include('simpleicons-14/S/Streamrunners')

' renders the element
Streamrunners('Streamrunners', 'Streamrunners', 'an optional tech label', 'an optional description')
@enduml
```

