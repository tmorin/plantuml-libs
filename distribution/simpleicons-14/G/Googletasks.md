# Googletasks


```text
simpleicons-14/G/Googletasks
```

```text
include('simpleicons-14/G/Googletasks')
```



| Illustration | Googletasks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googletasks.png) | ![illustration for Googletasks](../../simpleicons-14/G/Googletasks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogletasksXs>`
- `<$GoogletasksSm>`
- `<$GoogletasksMd>`
- `<$GoogletasksLg>`





## Googletasks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googletasks
include('simpleicons-14/G/Googletasks')

' renders the element
Googletasks('Googletasks', 'Googletasks', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googletasks
include('simpleicons-14/G/Googletasks')

' renders the element
Googletasks('Googletasks', 'Googletasks', 'an optional tech label', 'an optional description')
@enduml
```

