# Gplv3


```text
simpleicons-14/G/Gplv3
```

```text
include('simpleicons-14/G/Gplv3')
```



| Illustration | Gplv3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Gplv3.png) | ![illustration for Gplv3](../../simpleicons-14/G/Gplv3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Gplv3Xs>`
- `<$Gplv3Sm>`
- `<$Gplv3Md>`
- `<$Gplv3Lg>`





## Gplv3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Gplv3
include('simpleicons-14/G/Gplv3')

' renders the element
Gplv3('Gplv3', 'Gplv3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gplv3
include('simpleicons-14/G/Gplv3')

' renders the element
Gplv3('Gplv3', 'Gplv3', 'an optional tech label', 'an optional description')
@enduml
```

