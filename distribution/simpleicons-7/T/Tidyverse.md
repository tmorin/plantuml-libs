# Tidyverse


```text
simpleicons-7/T/Tidyverse
```

```text
include('simpleicons-7/T/Tidyverse')
```



| Illustration | Tidyverse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Tidyverse.png) | ![illustration for Tidyverse](../../simpleicons-7/T/Tidyverse.Local.png) |




## Tidyverse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tidyverse
include('simpleicons-7/T/Tidyverse')

' renders the element
Tidyverse('Tidyverse', 'Tidyverse', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Tidyverse
include('simpleicons-7/T/Tidyverse')

' renders the element
Tidyverse('Tidyverse', 'Tidyverse', 'an optional tech label', 'an optional description')
@enduml
```

