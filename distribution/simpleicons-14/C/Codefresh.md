# Codefresh


```text
simpleicons-14/C/Codefresh
```

```text
include('simpleicons-14/C/Codefresh')
```



| Illustration | Codefresh |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Codefresh.png) | ![illustration for Codefresh](../../simpleicons-14/C/Codefresh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CodefreshXs>`
- `<$CodefreshSm>`
- `<$CodefreshMd>`
- `<$CodefreshLg>`





## Codefresh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Codefresh
include('simpleicons-14/C/Codefresh')

' renders the element
Codefresh('Codefresh', 'Codefresh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Codefresh
include('simpleicons-14/C/Codefresh')

' renders the element
Codefresh('Codefresh', 'Codefresh', 'an optional tech label', 'an optional description')
@enduml
```

