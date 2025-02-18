# Construct3


```text
simpleicons-14/C/Construct3
```

```text
include('simpleicons-14/C/Construct3')
```



| Illustration | Construct3 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/C/Construct3.png) | ![illustration for Construct3](../../simpleicons-14/C/Construct3.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Construct3Xs>`
- `<$Construct3Sm>`
- `<$Construct3Md>`
- `<$Construct3Lg>`





## Construct3

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Construct3
include('simpleicons-14/C/Construct3')

' renders the element
Construct3('Construct3', 'Construct3', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Construct3
include('simpleicons-14/C/Construct3')

' renders the element
Construct3('Construct3', 'Construct3', 'an optional tech label', 'an optional description')
@enduml
```

