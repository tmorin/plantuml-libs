# Go


```text
simpleicons-14/G/Go
```

```text
include('simpleicons-14/G/Go')
```



| Illustration | Go |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Go.png) | ![illustration for Go](../../simpleicons-14/G/Go.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoXs>`
- `<$GoSm>`
- `<$GoMd>`
- `<$GoLg>`





## Go

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Go
include('simpleicons-14/G/Go')

' renders the element
Go('Go', 'Go', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Go
include('simpleicons-14/G/Go')

' renders the element
Go('Go', 'Go', 'an optional tech label', 'an optional description')
@enduml
```

