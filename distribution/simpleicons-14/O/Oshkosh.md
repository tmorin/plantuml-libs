# Oshkosh


```text
simpleicons-14/O/Oshkosh
```

```text
include('simpleicons-14/O/Oshkosh')
```



| Illustration | Oshkosh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Oshkosh.png) | ![illustration for Oshkosh](../../simpleicons-14/O/Oshkosh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OshkoshXs>`
- `<$OshkoshSm>`
- `<$OshkoshMd>`
- `<$OshkoshLg>`





## Oshkosh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Oshkosh
include('simpleicons-14/O/Oshkosh')

' renders the element
Oshkosh('Oshkosh', 'Oshkosh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Oshkosh
include('simpleicons-14/O/Oshkosh')

' renders the element
Oshkosh('Oshkosh', 'Oshkosh', 'an optional tech label', 'an optional description')
@enduml
```

