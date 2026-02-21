# Fineco


```text
simpleicons/F/Fineco
```

```text
include('simpleicons/F/Fineco')
```



| Illustration | Fineco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fineco.png) | ![illustration for Fineco](../../simpleicons/F/Fineco.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FinecoXs>`
- `<$FinecoSm>`
- `<$FinecoMd>`
- `<$FinecoLg>`





## Fineco

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fineco
include('simpleicons/F/Fineco')

' renders the element
Fineco('Fineco', 'Fineco', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fineco
include('simpleicons/F/Fineco')

' renders the element
Fineco('Fineco', 'Fineco', 'an optional tech label', 'an optional description')
@enduml
```

