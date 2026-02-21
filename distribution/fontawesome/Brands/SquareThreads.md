# SquareThreads


```text
fontawesome/Brands/SquareThreads
```

```text
include('fontawesome/Brands/SquareThreads')
```



| Illustration | SquareThreads |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareThreads.png) | ![illustration for SquareThreads](../../fontawesome/Brands/SquareThreads.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareThreadsXs>`
- `<$SquareThreadsSm>`
- `<$SquareThreadsMd>`
- `<$SquareThreadsLg>`





## SquareThreads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareThreads
include('fontawesome/Brands/SquareThreads')

' renders the element
SquareThreads('SquareThreads', 'Square Threads', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareThreads
include('fontawesome/Brands/SquareThreads')

' renders the element
SquareThreads('SquareThreads', 'Square Threads', 'an optional tech label', 'an optional description')
@enduml
```

