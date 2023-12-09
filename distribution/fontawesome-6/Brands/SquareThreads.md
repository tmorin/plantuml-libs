# SquareThreads


```text
fontawesome-6/Brands/SquareThreads
```

```text
include('fontawesome-6/Brands/SquareThreads')
```



| Illustration | SquareThreads |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareThreads.png) | ![illustration for SquareThreads](../../fontawesome-6/Brands/SquareThreads.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareThreads
include('fontawesome-6/Brands/SquareThreads')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareThreads
include('fontawesome-6/Brands/SquareThreads')

' renders the element
SquareThreads('SquareThreads', 'Square Threads', 'an optional tech label', 'an optional description')
@enduml
```

