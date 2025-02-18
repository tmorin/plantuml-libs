# Moo


```text
simpleicons-14/M/Moo
```

```text
include('simpleicons-14/M/Moo')
```



| Illustration | Moo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/M/Moo.png) | ![illustration for Moo](../../simpleicons-14/M/Moo.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MooXs>`
- `<$MooSm>`
- `<$MooMd>`
- `<$MooLg>`





## Moo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Moo
include('simpleicons-14/M/Moo')

' renders the element
Moo('Moo', 'Moo', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Moo
include('simpleicons-14/M/Moo')

' renders the element
Moo('Moo', 'Moo', 'an optional tech label', 'an optional description')
@enduml
```

