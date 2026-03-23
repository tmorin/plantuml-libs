# Leetcode


```text
fontawesome/Brands/Leetcode
```

```text
include('fontawesome/Brands/Leetcode')
```



| Illustration | Leetcode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Leetcode.png) | ![illustration for Leetcode](../../fontawesome/Brands/Leetcode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeetcodeXs>`
- `<$LeetcodeSm>`
- `<$LeetcodeMd>`
- `<$LeetcodeLg>`





## Leetcode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Leetcode
include('fontawesome/Brands/Leetcode')

' renders the element
Leetcode('Leetcode', 'Leetcode', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Leetcode
include('fontawesome/Brands/Leetcode')

' renders the element
Leetcode('Leetcode', 'Leetcode', 'an optional tech label', 'an optional description')
@enduml
```

