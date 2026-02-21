# Tarteaucitron


```text
simpleicons-14/T/Tarteaucitron
```

```text
include('simpleicons-14/T/Tarteaucitron')
```



| Illustration | Tarteaucitron |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Tarteaucitron.png) | ![illustration for Tarteaucitron](../../simpleicons-14/T/Tarteaucitron.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TarteaucitronXs>`
- `<$TarteaucitronSm>`
- `<$TarteaucitronMd>`
- `<$TarteaucitronLg>`





## Tarteaucitron

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Tarteaucitron
include('simpleicons-14/T/Tarteaucitron')

' renders the element
Tarteaucitron('Tarteaucitron', 'Tarteaucitron', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tarteaucitron
include('simpleicons-14/T/Tarteaucitron')

' renders the element
Tarteaucitron('Tarteaucitron', 'Tarteaucitron', 'an optional tech label', 'an optional description')
@enduml
```

