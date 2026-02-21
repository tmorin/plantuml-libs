# Fusionauth


```text
simpleicons-14/F/Fusionauth
```

```text
include('simpleicons-14/F/Fusionauth')
```



| Illustration | Fusionauth |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Fusionauth.png) | ![illustration for Fusionauth](../../simpleicons-14/F/Fusionauth.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FusionauthXs>`
- `<$FusionauthSm>`
- `<$FusionauthMd>`
- `<$FusionauthLg>`





## Fusionauth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Fusionauth
include('simpleicons-14/F/Fusionauth')

' renders the element
Fusionauth('Fusionauth', 'Fusionauth', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fusionauth
include('simpleicons-14/F/Fusionauth')

' renders the element
Fusionauth('Fusionauth', 'Fusionauth', 'an optional tech label', 'an optional description')
@enduml
```

