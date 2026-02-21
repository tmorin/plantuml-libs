# Fineco


```text
simpleicons-14/F/Fineco
```

```text
include('simpleicons-14/F/Fineco')
```



| Illustration | Fineco |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fineco.png) | ![illustration for Fineco](../../simpleicons-14/F/Fineco.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fineco
include('simpleicons-14/F/Fineco')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fineco
include('simpleicons-14/F/Fineco')

' renders the element
Fineco('Fineco', 'Fineco', 'an optional tech label', 'an optional description')
@enduml
```

