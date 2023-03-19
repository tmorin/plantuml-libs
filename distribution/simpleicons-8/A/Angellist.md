# Angellist


```text
simpleicons-8/A/Angellist
```

```text
include('simpleicons-8/A/Angellist')
```



| Illustration | Angellist |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Angellist.png) | ![illustration for Angellist](../../simpleicons-8/A/Angellist.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AngellistXs>`
- `<$AngellistSm>`
- `<$AngellistMd>`
- `<$AngellistLg>`





## Angellist

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Angellist
include('simpleicons-8/A/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Angellist
include('simpleicons-8/A/Angellist')

' renders the element
Angellist('Angellist', 'Angellist', 'an optional tech label', 'an optional description')
@enduml
```

