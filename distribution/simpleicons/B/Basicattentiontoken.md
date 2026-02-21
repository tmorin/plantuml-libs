# Basicattentiontoken


```text
simpleicons/B/Basicattentiontoken
```

```text
include('simpleicons/B/Basicattentiontoken')
```



| Illustration | Basicattentiontoken |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/B/Basicattentiontoken.png) | ![illustration for Basicattentiontoken](../../simpleicons/B/Basicattentiontoken.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BasicattentiontokenXs>`
- `<$BasicattentiontokenSm>`
- `<$BasicattentiontokenMd>`
- `<$BasicattentiontokenLg>`





## Basicattentiontoken

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Basicattentiontoken
include('simpleicons/B/Basicattentiontoken')

' renders the element
Basicattentiontoken('Basicattentiontoken', 'Basicattentiontoken', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Basicattentiontoken
include('simpleicons/B/Basicattentiontoken')

' renders the element
Basicattentiontoken('Basicattentiontoken', 'Basicattentiontoken', 'an optional tech label', 'an optional description')
@enduml
```

