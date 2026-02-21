# Formbricks


```text
simpleicons-14/F/Formbricks
```

```text
include('simpleicons-14/F/Formbricks')
```



| Illustration | Formbricks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/F/Formbricks.png) | ![illustration for Formbricks](../../simpleicons-14/F/Formbricks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FormbricksXs>`
- `<$FormbricksSm>`
- `<$FormbricksMd>`
- `<$FormbricksLg>`





## Formbricks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Formbricks
include('simpleicons-14/F/Formbricks')

' renders the element
Formbricks('Formbricks', 'Formbricks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Formbricks
include('simpleicons-14/F/Formbricks')

' renders the element
Formbricks('Formbricks', 'Formbricks', 'an optional tech label', 'an optional description')
@enduml
```

