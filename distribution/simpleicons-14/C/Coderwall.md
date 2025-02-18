# Coderwall


```text
simpleicons-14/C/Coderwall
```

```text
include('simpleicons-14/C/Coderwall')
```



| Illustration | Coderwall |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Coderwall.png) | ![illustration for Coderwall](../../simpleicons-14/C/Coderwall.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CoderwallXs>`
- `<$CoderwallSm>`
- `<$CoderwallMd>`
- `<$CoderwallLg>`





## Coderwall

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Coderwall
include('simpleicons-14/C/Coderwall')

' renders the element
Coderwall('Coderwall', 'Coderwall', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Coderwall
include('simpleicons-14/C/Coderwall')

' renders the element
Coderwall('Coderwall', 'Coderwall', 'an optional tech label', 'an optional description')
@enduml
```

