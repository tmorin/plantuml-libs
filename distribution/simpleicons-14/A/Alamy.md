# Alamy


```text
simpleicons-14/A/Alamy
```

```text
include('simpleicons-14/A/Alamy')
```



| Illustration | Alamy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Alamy.png) | ![illustration for Alamy](../../simpleicons-14/A/Alamy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlamyXs>`
- `<$AlamySm>`
- `<$AlamyMd>`
- `<$AlamyLg>`





## Alamy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Alamy
include('simpleicons-14/A/Alamy')

' renders the element
Alamy('Alamy', 'Alamy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Alamy
include('simpleicons-14/A/Alamy')

' renders the element
Alamy('Alamy', 'Alamy', 'an optional tech label', 'an optional description')
@enduml
```

