# Php


```text
fontawesome-5/Brands/Php
```

```text
include('fontawesome-5/Brands/Php')
```



| Illustration | Php |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Brands/Php.png) | ![illustration for Php](../../fontawesome-5/Brands/Php.Local.png) |




## Php

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Php
include('fontawesome-5/Brands/Php')

' renders the element
Php('Php', 'Php', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Php
include('fontawesome-5/Brands/Php')

' renders the element
Php('Php', 'Php', 'an optional tech label')
@enduml
```

