# Atandt


```text
simpleicons-8/A/Atandt
```

```text
include('simpleicons-8/A/Atandt')
```



| Illustration | Atandt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Atandt.png) | ![illustration for Atandt](../../simpleicons-8/A/Atandt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AtandtXs>`
- `<$AtandtSm>`
- `<$AtandtMd>`
- `<$AtandtLg>`





## Atandt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Atandt
include('simpleicons-8/A/Atandt')

' renders the element
Atandt('Atandt', 'Atandt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Atandt
include('simpleicons-8/A/Atandt')

' renders the element
Atandt('Atandt', 'Atandt', 'an optional tech label', 'an optional description')
@enduml
```

