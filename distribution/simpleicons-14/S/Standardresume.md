# Standardresume


```text
simpleicons-14/S/Standardresume
```

```text
include('simpleicons-14/S/Standardresume')
```



| Illustration | Standardresume |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Standardresume.png) | ![illustration for Standardresume](../../simpleicons-14/S/Standardresume.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StandardresumeXs>`
- `<$StandardresumeSm>`
- `<$StandardresumeMd>`
- `<$StandardresumeLg>`





## Standardresume

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Standardresume
include('simpleicons-14/S/Standardresume')

' renders the element
Standardresume('Standardresume', 'Standardresume', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Standardresume
include('simpleicons-14/S/Standardresume')

' renders the element
Standardresume('Standardresume', 'Standardresume', 'an optional tech label', 'an optional description')
@enduml
```

